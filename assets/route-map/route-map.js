/* Route explorer: local road geometry, online OpenStreetMap basemap. */
(() => {
  const DATA = window.IZU_ROUTE_DATA;
  const names = {
    narita:['Narita Airport T1','สนามบินนาริตะ T1'],nikko:['Hotel Nikko Narita','Hotel Nikko Narita'],
    ebina:['Ebina SA · outbound','Ebina SA · ขาออก'],baien:['Atami Baien','สวนอาตามิไบเอ็น'],
    komuro:['Komuroyama Park','สวนเขาโคมุโระ'],anjin:['KAI Anjin · Ito','KAI Anjin · อิโต'],
    jogasaki:['Jogasaki · Kadowaki Bridge','โจงาซากิ · สะพานคาโดวากิ'],shirahama:['Shirahama Shrine & beach','ศาลเจ้าชิราฮามะและชายหาด'],
    perry:['Perry Road · Shimoda','Perry Road · ชิโมดะ'],shuzenji:['Shuzenji Temple & town','วัดและเมืองชูเซ็นจิ'],
    kakitagawa:['Kakitagawa Park','สวนคาคิตะกาวะ'],skywalk:['Mishima Skywalk','มิชิมะสกายวอล์ก'],
    ginza:['Daiwa Roynet Ginza PREMIER','Daiwa Roynet Ginza PREMIER'],disney:['Tokyo Disneyland','โตเกียวดิสนีย์แลนด์'],haneda:['Haneda Airport T3','สนามบินฮาเนดะ T3']
  };
  const days = {
    d0:{color:'#6366f1',title:['Arrival in Japan','เดินทางถึงญี่ปุ่น'],date:['4–5 Dec','4–5 ธ.ค.'],stops:['narita','nikko'],note:['The main group stays at Nikko Narita. Your household lands the next morning. Locations only; no shared coach route yet.','กลุ่มใหญ่ค้างที่ Nikko Narita บ้านเราถึงเช้าวันถัดไป แสดงตำแหน่งที่พักและสนามบิน ยังไม่มีเส้นทางรถบัสร่วมกัน']},
    d1:{color:'#b45345',title:['Narita → Atami → Ito','นาริตะ → อาตามิ → อิโต'],date:['5 Dec · D1','5 ธ.ค. · D1'],stops:['narita','nikko','ebina','baien','komuro','anjin'],times:['06:20','08:30','10:00–10:30','11:30–12:30','14:30–15:45','16:00'],paths:['d1'],note:['Airport → hotel by shuttle; coach from Nikko at 08:30. Lunch location is not fixed.','สนามบิน → โรงแรมด้วยรถรับส่ง แล้วขึ้นรถบัสที่ Nikko เวลา 08:30 มื้อเที่ยงยังไม่ระบุร้าน']},
    d2:{color:'#087e9b',title:['Along the Izu coast','เลียบชายฝั่งอิซุ'],date:['6 Dec · D2','6 ธ.ค. · D2'],stops:['anjin','jogasaki','shirahama','perry','anjin'],times:['09:30','10:00–10:50','11:30–12:30','14:00–15:00','16:30'],paths:['d2'],note:['Out and back along the east coast. Kinmedai lunch in Shimoda; optional Marine Town is not included in the line.','ไป–กลับเลียบชายฝั่งตะวันออก มื้อเที่ยงปลาคินเมไดแถวชิโมดะ เส้นทางไม่รวม Marine Town ซึ่งเป็นจุดแวะเสริม']},
    d3:{color:'#ad761b',title:['Izu → Fuji views → Tokyo','อิซุ → วิวฟูจิ → โตเกียว'],date:['7 Dec · D3','7 ธ.ค. · D3'],stops:['anjin','shuzenji','kakitagawa','skywalk','ginza'],times:['09:00','09:50–11:30','13:20–14:10','14:30–15:40','18:30'],paths:['d3'],note:['Check out of KAI Anjin, visit Shuzenji and Mishima, then continue to Ginza. Lunch venue is not fixed.','เช็กเอาต์ KAI Anjin แวะชูเซ็นจิและมิชิมะ ก่อนเข้ากินซ่า มื้อเที่ยงยังไม่ระบุร้าน']},
    d4:{color:'#b04881',title:['Tokyo Disneyland','โตเกียวดิสนีย์แลนด์'],date:['8 Dec · D4','8 ธ.ค. · D4'],stops:['ginza','disney'],note:['Locations only. Open Google Maps for train connections and departure times; no driving route is shown.','แสดงตำแหน่งต้นทางและปลายทาง เปิด Google Maps เพื่อดูรถไฟและเวลาเดินทาง ไม่แสดงเส้นรถยนต์แทนเส้นรถไฟ']},
    d5:{color:'#5065a6',title:['A free day in Tokyo','วันอิสระในโตเกียว'],date:['9 Dec · D5','9 ธ.ค. · D5'],stops:['ginza'],note:['Ginza is your base. No fixed itinerary, so there is no route line today.','ใช้โรงแรมที่กินซ่าเป็นฐาน วันนี้ไม่มีจุดเที่ยวตายตัว จึงไม่มีเส้นทางกำหนดไว้']},
    d6:{color:'#475569',title:['Two airports, two departures','สองสนามบิน สองเส้นทางกลับ'],date:['10 Dec · D6','10 ธ.ค. · D6'],stops:['ginza','narita','haneda'],paths:['d6','haneda'],note:['Solid slate: family coach to Narita. Dashed purple: your household’s evening taxi to Haneda T3 (TG661, 00:20).','เส้นทึบสีเทา: รถบัสครอบครัวไปนาริตะ เส้นประสีม่วง: บ้านเรานั่งแท็กซี่ไปฮาเนดะ T3 ตอนเย็น (TG661 00:20)']}
  };
  let current='all', language='th', map, layers, observer, resizeObserver, root, markers={}, bounds;
  const t = (en,th) => language==='th'?th:en;
  const label = id => names[id][language==='th'?1:0];
  const coords = id => DATA.places[id].latlng;
  const searchURL = id => 'https://www.google.com/maps/search/?api=1&query='+encodeURIComponent(coords(id).join(','));
  function directions(ids,mode='driving'){
    const p=new URLSearchParams({api:'1',origin:coords(ids[0]).join(','),destination:coords(ids.at(-1)).join(','),travelmode:mode});
    if(ids.length>2)p.set('waypoints',ids.slice(1,-1).map(id=>coords(id).join(',')).join('|'));
    return 'https://www.google.com/maps/dir/?'+p;
  }
  const link=(url,title)=>`<a class="maps-btn" href="${url}" target="_blank" rel="noopener">${title} ↗</a>`;
  function routeLinks(id){
    const d=days[id],title=t('Open in Google Maps','เปิดใน Google Maps');
    if(id==='d1')return link(directions(d.stops.slice(1)),title+' · '+t('coach','รถบัส'))+link(directions(['narita','nikko']),t('Airport → hotel','สนามบิน → โรงแรม'));
    if(id==='d6')return link(directions(['ginza','narita']),'Narita ↗'.replace(' ↗',''))+' '+link(directions(['ginza','haneda']),'Haneda T3');
    if(id==='d4')return link(directions(d.stops,'transit'),title+' · '+t('transit','รถไฟ'));
    if(id==='d0'||id==='d5')return link(searchURL(id==='d0'?'nikko':'ginza'),title);
    return link(directions(d.stops),title);
  }
  window.routeMapHTML = l => `<p class="route-map-intro">${l==='th'?'เลือกวันเพื่อดูเส้นทางตามถนนและจุดแวะตามลำดับ · แตะหมุดหรือชื่อสถานที่เพื่อดูใกล้ๆ':'Choose a day to see roads and ordered stops. Tap a pin or place name to explore.'}</p><section class="route-explorer" aria-label="${l==='th'?'แผนที่ทริปแบบโต้ตอบ':'Interactive trip map'}"><div class="route-tabs" role="group" aria-label="${l==='th'?'เลือกวัน':'Choose a day'}"></div><div class="route-map-layout"><div class="route-map-stage"><div class="route-map-canvas" id="trip-route-map" aria-label="${l==='th'?'แผนที่ญี่ปุ่น เลื่อนและซูมได้':'Japan map, pan and zoom'}"></div><button class="route-fit" type="button">${l==='th'?'ดูเส้นทางเต็ม':'Fit route'}</button><div class="route-map-status" role="status" hidden></div></div><aside class="route-map-panel" aria-live="polite"></aside></div><p class="route-map-footer">${l==='th'?'เส้นทางถนนเป็นแนวทางโดยประมาณสำหรับวางแผน ไม่รวมจราจรสดหรือข้อจำกัดรถบัสใหญ่ · แผนที่พื้นหลังต้องใช้อินเทอร์เน็ต':'Road routes are planning estimates, without live traffic or large-coach restrictions. Basemap requires internet.'} · <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">© OpenStreetMap</a> / <a href="https://project-osrm.org/" target="_blank" rel="noopener">OSRM</a></p></section>`;
  function panel(){
    if(current==='all')return `<div class="route-map-eyebrow">IZU / TOKYO · 4–10 DEC</div><h3>${t('One trip, day by day','หนึ่งทริป ดูทีละวัน')}</h3><p class="route-map-description">${t('Roads for D1–D3 and the return journeys. Select a day to separate overlapping routes.','ภาพรวมถนน D1–D3 และขากลับ เลือกวันเพื่อแยกเส้นทางที่ซ้อนกัน')}</p>${Object.entries(days).map(([id,d])=>`<button type="button" class="route-overview-button" data-route-select="${id}" style="--route-color:${d.color}"><span class="route-overview-swatch"></span><span><strong>${id.toUpperCase()} · ${d.title[language==='th'?1:0]}</strong><small>${d.date[language==='th'?1:0]}</small></span></button>`).join('')}`;
    const d=days[current];
    return `<div class="route-map-eyebrow">${d.date[language==='th'?1:0]}</div><h3>${d.title[language==='th'?1:0]}</h3><p class="route-map-description">${d.note[language==='th'?1:0]}</p><ol class="route-map-stops" style="--route-color:${d.color}">${d.stops.map((id,i)=>`<li><button class="route-stop-button" type="button" data-route-stop="${id}"><span class="route-stop-num">${i+1}</span><span>${label(id)}${d.times?`<small>${d.times[i]}${current==='d2'&&i===4?' · '+t('return','กลับโรงแรม'):''}</small>`:''}</span></button></li>`).join('')}</ol>${routeLinks(current)}`;
  }
  function fit(){if(map&&bounds?.isValid()){map.invalidateSize();map.fitBounds(bounds,{padding:[35,40],maxZoom:current==='d5'?14:13,animate:false});}}
  function draw(){
    if(!map)return;
    layers.clearLayers();markers={};bounds=L.latLngBounds([]);
    const selected=current==='all'?['d1','d2','d3','d6']: [current];
    for(const id of selected){const d=days[id];for(const path of d.paths||[]){
      const data=DATA.routes[path],color=path==='haneda'?'#8b5ca6':d.color;
      const line=L.polyline(data.coordinates,{color,weight:current==='all'?3:5,opacity:.9,dashArray:path==='haneda'?'8 7':undefined}).addTo(layers);
      line.bindTooltip(path==='haneda'?'Haneda T3':id.toUpperCase()+' · '+d.title[language==='th'?1:0]);
      line.on('click',()=>select(id));bounds.extend(line.getBounds());
    }}
    const ids=current==='all'?['narita','anjin','ginza','disney','haneda','shirahama','shuzenji']: [...new Set(days[current].stops)];
    ids.forEach(id=>{
      const d=current==='all'?null:days[current];const nums=d?d.stops.flatMap((x,i)=>x===id?[i+1]:[]):[];
      const pin=d?nums.join('/') : ({narita:'NRT',anjin:'伊',ginza:'東',disney:'D',haneda:'HND',shirahama:'海',shuzenji:'寺'})[id];
      const color=d?.color||'#0b2545';
      const marker=L.marker(coords(id),{title:label(id),icon:L.divIcon({className:'route-marker',html:`<span style="--route-color:${color}">${pin}</span>`,iconSize:[34,30],iconAnchor:[17,15]})}).addTo(layers);
      marker.bindTooltip(label(id),{direction:'top',offset:[0,-14]});marker.bindPopup(`<strong>${label(id)}</strong><br><a target="_blank" rel="noopener" href="${searchURL(id)}">${t('Open this place in Google Maps','เปิดสถานที่นี้ใน Google Maps')} ↗</a>`);
      markers[id]=marker;bounds.extend(coords(id));
    });fit();
  }
  function select(id){
    current=id;
    root.querySelector('.route-tabs').innerHTML=[['all',t('Overview','ภาพรวม')],...Object.keys(days).map(id=>[id,id.toUpperCase()])].map(([key,name])=>`<button type="button" data-route-select="${key}" aria-pressed="${key===current}" style="--route-color:${days[key]?.color||'#0b2545'}">${name}</button>`).join('');
    root.querySelector('.route-map-panel').innerHTML=panel();
    root.closest('[data-sec="route"]').querySelectorAll('.route-day').forEach((el,i)=>{el.hidden=current!=='all'&&current!=='d'+i;});
    draw();
  }
  function init(){
    if(map||!root?.isConnected)return;
    const status=root.querySelector('.route-map-status');
    if(!window.L||!DATA){status.hidden=false;status.textContent=t('Map unavailable. Use the Google Maps links below.','โหลดแผนที่ไม่ได้ ใช้ลิงก์ Google Maps ด้านล่างได้');return;}
    map=L.map(root.querySelector('.route-map-canvas'),{scrollWheelZoom:false,zoomControl:true});
    const tiles=L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{maxZoom:19,attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
    tiles.on('tileerror',()=>{status.hidden=false;status.textContent=t('Basemap could not load. Check your connection or open Google Maps.','โหลดแผนที่พื้นหลังไม่ได้ ตรวจอินเทอร์เน็ตหรือเปิด Google Maps');});
    tiles.on('tileload',()=>{status.hidden=true;});
    layers=L.layerGroup().addTo(map);L.control.scale({imperial:false,position:'bottomleft'}).addTo(map);draw();
    if(window.ResizeObserver){resizeObserver=new ResizeObserver(()=>map?.invalidateSize());resizeObserver.observe(root.querySelector('.route-map-canvas'));}
  }
  window.disposeRouteMap=()=>{observer?.disconnect();resizeObserver?.disconnect();if(map)map.remove();map=null;layers=null;root=null;};
  window.mountRouteMap=l=>{
    language=l;root=document.querySelector('.route-explorer');if(!root)return;
    root.addEventListener('click',e=>{
      const choice=e.target.closest('[data-route-select]');if(choice){select(choice.dataset.routeSelect);return;}
      if(e.target.closest('.route-fit')){init();fit();return;}
      const stop=e.target.closest('[data-route-stop]');if(stop){init();const id=stop.dataset.routeStop;if(map){map.setView(coords(id),15);markers[id]?.openPopup();}}
    });
    root.closest('[data-sec="route"]').querySelectorAll('.route-day').forEach((el,i)=>{
      const button=document.createElement('button');button.type='button';button.className='route-focus-day';button.textContent=t('Show on map','ดูบนแผนที่');button.addEventListener('click',()=>{select('d'+i);root.scrollIntoView({behavior:'smooth',block:'center'});});el.querySelector('.route-day-head').append(button);
    });
    select(current);
    if(window.IntersectionObserver){observer=new IntersectionObserver(entries=>{if(entries.some(e=>e.isIntersecting)){init();observer.disconnect();}},{rootMargin:'200px'});observer.observe(root);}else init();
  };
})();

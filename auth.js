const reshAuthChecker = async ()=>{
  if(window.reshBlock){return;}
  if(location.hostname == 'resh.edu.ru' && document.querySelector("body > div.outer-sf > div > header > div > div > div.d-tc.header-top__login-cell > div > a:nth-child(1)")!= null){
    let csrf = (await (await fetch('https://resh.edu.ru/login')).text()).split("<meta name='csrf-token-value' content='")[1].split("'/>")[0];
    let res = (await (await fetch('https://resh.edu.ru/login_check', {'method': 'post','headers': {'Content-Type': 'application/x-www-form-urlencoded'}, 'credentials': "include", 'body': new URLSearchParams({'_username': 'ПОЧТА', '_password': 'ПАРОЛЬ', 'csrftoken': csrf}).toString()})).text());
    window.location.reload();
  }
};
setInterval(reshAuthChecker,1000);
reshAuthChecker();
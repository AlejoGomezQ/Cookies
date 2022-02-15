// Creación y obtención cookie 
const newDateUTC = days => {
    let date = new Date();
    date.setTime(date.getTime() + days * 1000 * 60 * 60 * 24);
    return date.toUTCString();
}

const createCookie = (name, days) => {
    exp = newDateUTC(days);
    document.cookie = `${name};expires${exp}`;
}

const getCookie = cookieName => {
    let cookies = document.cookie;
    cookies = cookies.split(';');
    for (let i = 0; cookies.length > i; i++) {
       let  cookie = cookies[i].trim();
        if (cookie.startsWith(cookieName)) {
            return cookie.split('=')[1];
        }
    }
    return 'No hay cookies con ese nombre'
}

// Mostrar u ocultar cookie con css
const showCookie = () => {
    document.querySelector('.bg-modal').style.opacity = '1';
    document.querySelector('.bg-modal').style.zIndex = '10';
}

const hideCookie = () => {
    document.querySelector('.bg-modal').style.opacity = '0';
    setTimeout(() => {
        document.querySelector('.bg-modal').style.zIndex = '-1';
    }, 1000)
}

// Escuchas de los botones 
if (getCookie('acceptedCookies') !== 'si') {
    setTimeout(() => {
        showCookie()

        document.getElementById('accept').addEventListener('click', () => {
            createCookie('acceptedCookies=si', 30);
            hideCookie()
        })
        document.getElementById('deny').addEventListener('click', () => {
            createCookie('acceptedCookies=no', 30);
            hideCookie();

        })
    }, 200)
}
importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-app.js');

importScripts('https://www.gstatic.com/firebasejs/4.1.3/firebase-messaging.js');


const firebaseConfig = {
    messagingSenderId: "906306796726"
};

//init
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();


//Handle messages when your web app is in the background

messaging.setBackgroundMessageHandler(function(payload) {
    payload.data['data'] = payload.data;

    registration.showNotification(payload.data.title, payload.data['data']);

});



//handle when click to notification
self.addEventListener('notificationclick',
    function(event) {

        var click_action = event.notification;
        event.notification.close()

        event.waitUntil(clients.matchAll({
                type: "window"
            })
            .then(function(clientList) {
                return clients.openWindow("");
            }));

    });


const showMessage = function(payload) {

    const notificationTitle = payload.data.title;

    const notificationOptions = {
        body: payload.data.body,

        icon: payload.data.icon,
        image: payload.data.image,

        click_action: payload.data.click_action,
        data: payload.data.click_action
    };



    return self.registration.showNotification(notificationTitle, notificationOptions);

}
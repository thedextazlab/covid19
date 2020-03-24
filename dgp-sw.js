var DGPkey = '0x158646';
importScripts('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x35\x2e\x35\x2e\x36\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x61\x70\x70\x2e\x6a\x73');importScripts('\x68\x74\x74\x70\x73\x3a\x2f\x2f\x77\x77\x77\x2e\x67\x73\x74\x61\x74\x69\x63\x2e\x63\x6f\x6d\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x6a\x73\x2f\x35\x2e\x35\x2e\x36\x2f\x66\x69\x72\x65\x62\x61\x73\x65\x2d\x6d\x65\x73\x73\x61\x67\x69\x6e\x67\x2e\x6a\x73');firebase['\x69\x6e\x69\x74\x69\x61\x6c\x69\x7a\x65\x41\x70\x70']({'messagingSenderId':'\x38\x37\x32\x32\x35\x32\x33\x38\x35\x35\x34\x38'});

self.addEventListener('notificationclick', function(event) {

var click_action = event.notification.data.click_action || event.notification.click_action;
event.notification.close();

event.waitUntil(clients.matchAll({
    includeUncontrolled: true, type: "window"
}).then(function(clientList) {
    for (var i = 0; i < clientList.length; i++) {
        var client = clientList[i];
        if (client.url == click_action  && 'focus' in client)
            return client.focus();
    }
    if (clients.openWindow)
        return clients.openWindow(click_action);
    }));

});

const messaging=firebase['\x6d\x65\x73\x73\x61\x67\x69\x6e\x67']();

const showMessage = function(payload){
    const notificationTitle = payload.data.title;
    const notificationOptions = {
        body: payload.data.body,
        icon: payload.data.icon,
        image: payload.data.image,
        click_action: "https://digitalpush.org",
        data: { click_action: payload.data.click_action }
    };  

  return self.registration.showNotification(notificationTitle,notificationOptions); 
}   
messaging.setBackgroundMessageHandler(showMessage);

self.addEventListener('message', function (evt) {     
  console.log("self",self);
  showMessage( evt.data );
});

var vmaxt = "0x158646";
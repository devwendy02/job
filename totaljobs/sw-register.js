if ("serviceWorker" in navigator) {
    var version = '1.0.125';
    navigator.serviceWorker
        .register("/sw.js?v=" + version, {
            scope: "/"
        })
        .then(function(reg) {
            console.log("Registration succeeded. Scope is " + reg.scope);
        })
        .catch(function(error) {
            console.log("Registration failed with " + error);
        });
}
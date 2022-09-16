# NodeAPI-GoodSeedsTest
API para realizar pruebas de sincronizado
# Para probar local
http://direccionLocal:3000/route
direccionLocal = Direccion IPv4 (ipconfig en cmd)
Ej: http://192.168.127.1:3000/test
EJ: http://127.0.0.1:3000/test
# api test
const sleepTime = async (sleepTimeInMs: number) => {
    console.log("Fetch sleep ", sleepTimeInMs, "in ms")
    const res = await fetch('http://127.0.0.1:3000/sleep?time=' + sleepTimeInMs.toString());
    const data = await res.json();
    console.log('fetch response seccess:', data.success)
}
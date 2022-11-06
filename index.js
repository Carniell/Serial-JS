import { SerialPort } from 'serialport';

//Definições 
var PTS = "COM8", T_S = 9600
const conexao = new SerialPort({path: PTS, baudRate: T_S})

//enviar os dados por serial
function conexao_serial(){conexao.write("a")}
setTimeout(conexao_serial, 2000);

//Veja as portas disponíveis
async function listSerialPorts() {
  await SerialPort.list().then((ports) => {
      console.log('ports', ports)
})
}
listSerialPorts()


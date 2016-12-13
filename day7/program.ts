import {Input} from './input';
import {Ip} from './ip';

class Program {
  static executePart1(ips: Ip[]) {
    console.log(`The number of ips supporting TLS is ${ips.filter(ip => ip.isTlsSupported()).length}`);
  }
  static executePart2(ips: Ip[]) {
    
  }
}

Program.executePart1(Input.get());
Program.executePart2(Input.get());
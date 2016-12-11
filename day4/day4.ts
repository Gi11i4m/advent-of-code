import {Room} from './room';
import {Input} from './input';

class Program {
  static executePart1(rooms: Room[]) {
    console.log(`The sum of the sectorIds of valid rooms is ${rooms
      .filter(room => room.isValid())
      .map(room => room.sectorId)
      .reduce((sectorId1, sectorId2) => sectorId1 + sectorId2)}`);
  }
  static executePart2(rooms: Room[]) {
    console.log(`Decrypted name and sector id of the north pole object storage are ${rooms
      .filter(room => room.isValid())
      .map(room => `${room.decryptName()} - ${room.sectorId}`)
      .filter(decryptedName => /(north|pole)/.test(decryptedName))[0]}`);
  }
}

Program.executePart1(Input.get());
Program.executePart2(Input.get());
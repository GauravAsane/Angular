import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it('create an instance', () => {
    const pipe = new MarvellousChkPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be prime , perfect , even or add number' ,() =>{

    const obj = new MarvellousChkPipe();

    const ret1 = obj.transform(6);
    expect(ret1).toEqual('this is perfect as well as even number');

    expect(obj.transform(3)).toEqual('this is prime as well as odd number');

    expect(obj.transform(21)).toEqual('this is odd number');

    expect(obj.transform(24)).toEqual('this is even number');


  })
});

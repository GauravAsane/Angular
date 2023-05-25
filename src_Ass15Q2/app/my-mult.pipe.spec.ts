import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be return multiplication' , ()=>{
    const obj = new MyMultPipe();

    let ret = obj.transform(10,20);

    expect(ret).toEqual(200);
  })
});

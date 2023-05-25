import { MyAddPipe } from './my-add.pipe';


describe('MyAddPipe', () => {
  it('create an instance', () => {
    const pipe = new MyAddPipe();
    expect(pipe).toBeTruthy();
  });

  it('should be return addition' , () =>{

    let obj = new MyAddPipe()
    const ret = obj.transform(10,20);
    
    expect(ret).toEqual(30);
 
  });
});


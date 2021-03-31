function eventEmitter() {
  // Implement
  let temp = {}
  return {
    sub(str, func){
      if (str in temp) {
            temp[str].push(func)
      } else {
        temp[str] = [func]
      }
      
      return {
        value: func,
        unsub() {
          temp[str] = temp[str].filter((fun) => {
            return fun !== func
          })
        },        
      }
    },
    
    emit(str) {
      if (str in temp) {
        temp[str].forEach(event => event())
      }
    }
  }
}


let event = new eventEmitter();
const f1 = () => {console.log('f1')};
const f2 = () => {console.log('f2')};
const f3 = () => {console.log('f3')};


let sub1 = event.sub('test', f1);
let sub3 = event.sub('test', f3);

event.sub('test', f2);

event.emit('test'); 
// f1
// f2

sub1.unsub();
sub3.unsub();

event.emit('test');
// f2

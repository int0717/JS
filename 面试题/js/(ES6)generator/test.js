// 要生成一个自增的ID，可以编写一个next_id()函数：

var current_id = 0;

function next_id() {
    current_id ++;
    return current_id;
}
// 由于函数无法保存状态，故需要一个全局变量current_id来保存数字。

// 不用闭包，试用generator改写：

function* next_id() {
  var current_id = 0;

  while(true){
  
  current_id++;
  
  yield current_id;
  
  }
}


// 测试:
var
    x,
    pass = true,
    g = next_id();
for (x = 1; x < 100; x ++) {
    if (g.next().value !== x) {
        pass = false;
        console.log('测试失败!');
        break;
    }
}
if (pass) {
    console.log('测试通过!');
}

// class 開頭通常大寫
class People {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    console.log("eat");
  };
  
  sleep() {
    console.log("sleep");
  };
  
  play() {
    console.log("play");
  };
};


export default People;
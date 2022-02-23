/*function rest(...values) {
   console.log(values)
};
rest('Gabriel', 'Santos', 'Silva', 17);*/
function add(names, ...newnames) {
      var group = [
          ...names,
          ...newnames
      ];
      console.log(group);
};
let names = ["Gabriel", "Angela"];
let others = add(names, "Antonio", "Maria", "José", "Augusto");
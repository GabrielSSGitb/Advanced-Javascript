let carro = {
    nome: "lambo",
    ano: 2021,
    peso: 100,
    ligado: false,
    ligar:function() {
        console.log('Ligando á',this.nome,'Vroom Vroom bibi')
    },
    acelerar:function() {
        this.ligado= false;
        if(this.ligado == true) {
            console.log('vrooommmmmm')
        }else if(this.ligado == false) {
            console.log('Ligue o carro porfavor!!!')
        }
    }
};
console.log('Peso:'+carro.peso + 'Kg')
 if(carro.peso >= 1000) {
     console.log('Tá pesado demais man!')
 }else {
     console.log('Ai tá fit!')
 }
 console.log(carro.acelerar());
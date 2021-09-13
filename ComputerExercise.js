// Ejercicio 4
// Crear una función constructora Computadora que tenga las siguientes propiedades:
// ram:string
// cpu:string
// disco:string
// gpu:boolean

function Computer(ram, cpu, disk, gpu) {
    this.ram = ram
    this.cpu = cpu
    this.disk = disk
    this.gpu = gpu
}

// Ejercicio 5:
// Crear 5 computadoras distintas y guardarlas (Array) 
// de manera que luego podamos consultar cuántas computadoras tenemos y 
// poder mostrarlas por consola. 
// Además queremos ver el detalle de cada computadora por consola.

let computers = [];

computers.push(new Computer('8gb', 'Intel I9', '512gb', true))
computers.push(new Computer('4gb', 'Intel I5', '256gb', false))
computers.push(new Computer('16gb', 'Intel I7', '126gb', false))
computers.push(new Computer('8gb', 'Intel I7', '512gb', true))
computers.push(new Computer('4gb', 'Intel I3', '256gb', false))


function showAllStock(computers) {
    if (computers) {
        let computerLength = computers.length
        console.log (`${'El stock actual de computadoras es de: '}${computerLength}`);
    } else {
        console.log('No tenemos stock de computadoras.');
    }
}

function showComputerModel(computers) {
    console.log ('Contamos con los siguientes modelos:')
    console.log(computers);
}

// Ejercicio 6:
// Crear un nuevo Array a partir del primero, 
// donde vamos a guardar solamente las computadoras con gpu.

function showAllComputersWithGPU(computers) {
    let computersWithGPU = computers.filter(pc => pc.gpu);
    console.log('Las computadoras que tienen GPU son:')
    console.log(computersWithGPU);
    ;
};

showAllStock(computers);
showComputerModel(computers);
showAllComputersWithGPU(computers);


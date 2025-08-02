//Syntax forEach
//array.forEach(callback, thisValue);

//Ex
const objA = {
    numbers: [1, 2, 3],
    add(number) {
        console.log(this.numbers); // undefined
        this.numbers.push(number); // gây ra lỗi giá trị trước .push đang là undefined
    },

    // Nhìn có vẻ ổn nhưng gây ra lỗi
    // imports(numbers) {
    //     numbers.forEach(this.add);
    // }

    // Cách khắc phục
    // imports(numbers) {
    //     // console.log(this); // lúc này this trỏ về objA
    //     numbers.forEach(this.add, this);
    //     //                          ^
    //     //                         objA
    // }

    // Cách khác
    imports(numbers) {
        // this ở đây là : objA
        numbers.forEach((number) => {
        // Nhưng lưu ý nếu ở đây không dùng arrow function thì sẽ lỗi

        //VD: không phải là arrow function
        // numbers.forEach(function (number) {
        // ở trường hợp này 
        // thì đây không phải là 1 arrow function nên là nó sẽ có this ở của nó,  và hàm này được truyền vào trong forEach. Và forEach gọi độc lập không thông qua 1 "Object" nào vậy nên this lúc này sẽ là "Window"

            // còn khi dùng arrow function
            // this ở đây cũng là : objA , vì bản thân arrow function không có this, và objA rồi .add thì bình thường
            this.add(number);
            // Lúc này là ta chủ động gọi chứ không phải để cho forEach gọi nữa , và vì mình chủ động gọi thông qua this nên là sẽ không bị lỗi như lúc nảy
        })
    }
}

// Cách này ổn nhưng tốn thời gian và code
objA.add(4);
objA.add(5);
//objA.add được bởi vì this ở trong add là objA, và từ objA chọc lên numbers thì sẽ được

objA.imports([6, 7, 8]);
// còn lí do thông qua import bị lỗi , trong import dùng forEach rồi lại đưa this.add cho forEach, thì có nghĩa là chúng ra không trực tiếp gọi this.add, mà để cho forEach gọi this.add 

/*
Minh hoạ forEach chạy:
//Error
forEach = function(callback) {
                       ^
            lúc này ở đây sẽ là this.add
    for{ // sẽ có 1 vòng lặp for
        // sẽ gọi lại callback và truyền lại 1 số giá trị
        callback(...);
            ^
    ở đây gọi lại this.add
    //Nhưng lúc này nó sẽ gọi độc lập, và không thông qua 1 Object vậy this hiện tại sẽ tham chiếu về "Window", và ở "Window" hiện tại không có thuộc tinh numbers nên dùng .numbers sẽ là undefined
    }
}

//Thành công
forEach = function(callback,               thisValue) {
                       ^                       ^
            lúc này ở đây sẽ là this.add| thisValue lúc này là objA
    for{ // sẽ có 1 vòng lặp for
        // sẽ gọi lại callback và truyền lại 1 số giá trị
        callback.call(thisValue,...);
            ^
    ở đây gọi lại this.add
    // Chúc ta gọi callback thông qua phương thức call và truyền obj vào, thế là objA này sẽ được bind vào callback và cụ thể callback ở tình huống này là add(), rồi từ this của add là objA rồi lại chọc lên numbers được nên không có lỗi gì cả
    }
}
*/


console.log(objA.numbers);
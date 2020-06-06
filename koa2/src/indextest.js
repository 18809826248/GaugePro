let exec = require('child_process').exec

exec('gauge run ../../gauge-tests/specs/example.spec',function(error, stdout, stderr) {
    if(error){
        console.error(error);
    }
    else{
        console.log("success");
    }
})
// function execute(cmd){
//     exec(cmd, function(error, stdout, stderr) {
//         if(error){
//             console.error(error);
//         }
//         else{
//             console.log("success");
//         }
//     });
// }
// execute('gauge run ../../gauge-tests/specs/example.spec');
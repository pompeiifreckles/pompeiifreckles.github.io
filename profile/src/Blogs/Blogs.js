import c_debugging from '../assets/blogs/C_Debugging.jpg'
import function_life from '../assets/blogs/function_life.jpg'
import chrooting from '../assets/blogs/chrooting.jpg'
import exploitation from '../assets/blogs/exploitation.png'
import driver from '../assets/blogs/driver.jpg'

export const blogs = [
    {
        img: c_debugging,
        link: 'https://www.notion.so/Debugging-in-C-d7128e16928346eeb2c17a7284967f54',
        title: 'Debugging in C',
        body: 'We know C is awesome and gives you freedom to implement weird memory hacks. But it becomes little difficult when you don\'t know what went wrong in the program. Error handling is difficult in every language and becomes all the more difficult in C, which does not provide debugging or error handling API built into the language itself.',
    },
    {
        img: driver,
        link: 'https://github.com/pompeiifreckles/Device-Drivers',
        title: 'Device Drivers',
        body: 'More commonly known as a driver, a device driver or hardware driver is a group of files that enable one or more hardware devices to communicate with the computer\'s operating system. Without drivers, the computer would not be able to send and receive data correctly to hardware devices, such as a printer',
    },
    {
        img: exploitation,
        link: 'https://sidhu97ss.medium.com/art-of-exploitation-v1-0-1-39d613915883',
        title: 'Art of Exploitation',
        body: 'Lets see what is hacking it’s not just fiddling with tools or doing fancy tricks on your machine with pre written scripts and payloads, well it is, but how did we come here from just writing simple programs to breaking them down.',
    },
    {
        img: function_life,
        link: 'https://sidhu97ss.medium.com/life-of-a-function-4168a70f4ee8',
        title: 'Life of a Function',
        body: 'For you to be a better programmer, it\'s high time you move out of the nutshell of basics of your programing language and just peek into how it is being implemented on your system.',
    },
    {
        img: chrooting,
        link: 'https://sidhu97ss.medium.com/proper-way-of-chrooting-adbb3dfb083e',
        title: 'CHROOTing',
        body: 'With everything going easy these days we forget why it is important to do the work manually. One such tool is \‘chroot\’, which every poweruser might have used but don\’t understand fully. We tend to incline towards a more easier approach like docker but chroot itself has its own value.',
    },

    
]
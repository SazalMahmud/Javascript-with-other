function Orchid(){
    document.body.style.backgroundColor ='Orchid';

   }

   // olive color
const OliveButton = document.getElementById('Orange_id');
   // just set the name of the function
          OliveButton.onclick=Orange;
            function Orange(){
              document.body.style.backgroundColor ='Orange';
            }

const DarkGrayButton = document.getElementById('DarkGray_id');
             // num sara function(anonymous function)
             DarkGrayButton.onclick = function (){
               document.body.style.backgroundColor='DarkGray';
             }

// using add EventListener 
const DarkSlateGrayButton = document.getElementById('DarkSlateGray_id');
             DarkSlateGrayButton.addEventListener('click',m_DarkSlateGray)
             function m_DarkSlateGray(){
               document.body.style.backgroundColor = 'DarkSlateGray';
             }
//add EventListener 2
 const YellowGreenButton = document.getElementById('YellowGreen_id');
              YellowGreenButton.addEventListener('click', function M_YellowGreen(){
                document.body.style.backgroundColor = 'YellowGreen';
              })
// shortcut
document.getElementById('RosyBrown_id').addEventListener('click',function(){
                     document.body.style.backgroundColor = 'RosyBrown';
                   })
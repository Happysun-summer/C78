var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg", "https://previews.123rf.com/images/dualororua/dualororua1708/dualororua170800192/83761031-cute-little-girl-cartoon.jpg","https://www.pngkey.com/png/full/90-905691_cartoon-dad-png-vector-free-library-cartmans-dad.png", "https://previews.123rf.com/images/tigatelu/tigatelu1307/tigatelu130700004/20754296-cute-boy-cartoon-standing.jpg" , "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
           
var names = ["Fmaily Book","Hyabeal Robel", "Robel Gezai", "Peniel Robel", "Aster", ];
          
var i = 0;
function update()
{
     i++;
     var numbers_of_family_member_in_array = 5
     if(i > numbers_of_family_member_in_array )
     {
        i = 0;
     }
     var updatedImage = images[i];
     var updatedName  = names[i];
     document.getElementById("family_member_image").src = updatedImage;
     document.getElementById("family_member_name").innerHTML = updatedName; 
}

//import java.util.scanner;
public class main
{
    public static void main(string[] args){
        system.out.printin
        string arr[]= new string[4];
        scanner in = new scanner(system.in);
        system.out.printin("Enter name,surname,gender,age");
            for(int i=0;i<4;i++){
                arr[i]=in.next();
            }
            system.out.printin("Name | Surname | Gender | Age:");
            for(int i=0;i<4;i++){
                system.out.print(arr[i]+" | ");
            }
    }
}
//arrow function that receives three arguments
const sum = (num1 , num2,num3)=>{
    return num1+num2+num3;
    };
    console.log(sum(1,2,3))
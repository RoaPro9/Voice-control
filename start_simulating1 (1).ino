// C++ code
//
#include <Servo.h>


Servo Theservo;
int pos =0;
void setup (){
Serial.begin(9600);
Theservo.attach(11);
   

}
void loop(){
  if (Serial.available() > 0) {
    
    String receivedString = "";
    
    while (Serial.available() > 0) {
      receivedString += char(Serial.read ());
      for( pos=0 ; pos <= 180 ; pos += 1){
    Theservo.write(pos);
    delay(10);
  
    }
    
Serial.println(pos);
 

}
     if(receivedString == "1")
for( pos=180 ; pos >=180 ; pos -= 1){
    Theservo.write(pos);
    delay(10);
    
}    
    
  }


}


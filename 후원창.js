document.getElementById('donationForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var amount = document.getElementById('amount').value;

  // 후원 정보 출력
  console.log('이름:', name);
  console.log('이메일:', email);
  console.log('후원금액:', amount);

});

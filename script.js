function validEmail(str: string): boolean {
  if (typeof str !== 'string' || str.trim() === '') return false;

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  return emailRegex.test(str);
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));

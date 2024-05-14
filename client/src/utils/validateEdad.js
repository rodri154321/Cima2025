const isValidateAge = (dateOfBirth) => {
    const currentDate = new Date();
    const [day, month, year] = dateOfBirth.split('/');
  
    // Construir la fecha de nacimiento
    const dob = new Date(`${year}-${month}-${day}`);
    
    // Calcular la edad del usuario
    const age = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
  
    // Verificar si la fecha de nacimiento ya ha ocurrido este año
    if (monthDiff < 0 || (monthDiff === 0 && currentDate.getDate() < dob.getDate())) {
      age--;
    }
  
    // Verificar si la edad es mayor o igual a 14
    return age >= 14;
  };

  export default isValidateAge
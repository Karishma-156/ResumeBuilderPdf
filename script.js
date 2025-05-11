function clearField(id) {
  const input = document.getElementById(id);
  if (input.type === 'file') {
    input.value = '';
    document.getElementById('photoPreview').style.display = 'none';
  } else {
    input.value = '';
  }
  const errorElement = document.getElementById(id + 'Error');
  if (errorElement) errorElement.textContent = '';
}

function clearAll() {
  const fields = ['name', 'email', 'phone', 'education', 'skills', 'summary', 'experience', 'extra', 'photo'];
  fields.forEach(clearField);
}

function validateForm() {
  let valid = true;
  const requiredFields = ['name', 'email', 'phone', 'education', 'skills', 'summary', 'experience', 'photo'];

  requiredFields.forEach(field => {
    const value = document.getElementById(field).value.trim();
    const errorElement = document.getElementById(field + 'Error');
    if (!value) {
      errorElement.textContent = 'This field is required.';
      valid = false;
    } else {
      errorElement.textContent = '';
    }
  });

  const email = document.getElementById('email').value.trim();
  const emailError = document.getElementById('emailError');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email && !emailRegex.test(email)) {
    emailError.textContent = 'Enter a valid email address.';
    valid = false;
  }

  const phone = document.getElementById('phone').value.trim();
  const phoneError = document.getElementById('phoneError');
  const phoneRegex = /^\d{10}$/;
  if (phone && !phoneRegex.test(phone)) {
    phoneError.textContent = 'Enter a valid 10-digit phone number.';
    valid = false;
  }

  const photoInput = document.getElementById('photo');
  const photoError = document.getElementById('photoError');
  const file = photoInput.files[0];
  if (!file) {
    photoError.textContent = 'Please upload a photo.';
    valid = false;
  } else if (!['image/jpeg', 'image/jpg', 'application/pdf'].includes(file.type)) {
    photoError.textContent = 'Only JPG, JPEG, or PDF files are allowed.';
    valid = false;
  } else if (file.size > 1048576) {
    photoError.textContent = 'File size must be less than or equal to 1MB.';
    valid = false;
  } else {
    photoError.textContent = '';
  }

  return valid;
}

function generateResume() {
  if (!validateForm()) return;

  document.getElementById('previewName').textContent = document.getElementById('name').value;
  document.getElementById('previewEmail').textContent = document.getElementById('email').value;
  document.getElementById('previewPhone').textContent = document.getElementById('phone').value;
  document.getElementById('previewEducation').textContent = document.getElementById('education').value;
  document.getElementById('previewSkills').textContent = document.getElementById('skills').value;
  document.getElementById('previewSummary').textContent = document.getElementById('summary').value;
  document.getElementById('previewExperience').textContent = document.getElementById('experience').value;
  const extraValue = document.getElementById('extra').value.trim();
  document.getElementById('previewExtra').textContent = extraValue ? extraValue : 'Not Applicable';

  const nameInput = document.getElementById('name');
  const name = nameInput.value.trim();
if (name) {
  const existingName = document.querySelector('#resumeContent h1')
  if (existingName) existingName.remove();

  const nameElement = document.createElement('h1');
  nameElement.classList.add('h1');
  nameElement.textContent = name;
  
  // Style the name element as needed
  nameElement.style.fontSize = '24px';
  nameElement.style.marginBottom = '10px';
  nameElement.style.fontWeight = 'bold';
  
  const resumeContent = document.getElementById('resumeContent');
  resumeContent.insertBefore(nameElement, resumeContent.firstChild);
}


  // Handle photo preview
  const photoInput = document.getElementById('photo');
  const file = photoInput.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    const imgElement = document.getElementById('photoPreview');
    imgElement.src = e.target.result; // Set image source to the file
    imgElement.style.display = 'block'; // Show photo preview
  };

  if (file) {
    reader.readAsDataURL(file); // Read the file as Data URL
  }

  document.getElementById('formContainer').style.display = 'none';
  document.getElementById('previewContainer').style.display = 'block';
}

function editResume() {
  document.getElementById('previewContainer').style.display = 'none';
  document.getElementById('formContainer').style.display = 'block';
}

function confirmResume() {
  const previewContent = document.getElementById('resumeContent').innerHTML;
  document.getElementById('previewContainer').style.display = 'none';
  document.getElementById('finalResumeContainer').style.display = 'block';
  document.getElementById('finalResumeContent').innerHTML = previewContent;
}

function downloadPDF() {
  const element = document.getElementById('finalResumeContent');
  const opt = {
    margin: 0.5,
    filename: 'Final_Resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };
  html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
    window.open(pdf.output('bloburl'), '_blank');
  });
}

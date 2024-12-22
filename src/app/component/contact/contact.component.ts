import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;
  isSubmissionSuccessful = false;
  buttonMessage = 'Send Message';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    // Initialize the form with FormGroup and FormControls
    this.contactForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      'full_name': ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    this.isSubmissionSuccessful = false;
    this.buttonMessage = 'Sending';

    // Check if the form is valid before submission
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      // Set headers and encode the form data
      const headers = new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      });

      const params = new HttpParams()
        .set('email', formData.email)
        .set('full_name', formData['full_name'])
        .set('subject', formData.subject)
        .set('message', formData.message);

      // Send a POST request to your API endpoint
      this.http.post('https://megallp.com/contact_us.php',  params.toString(), { headers }).subscribe(
        (response) => {
          this.isSubmissionSuccessful = true;
          this.contactForm.reset();

          this.buttonMessage = 'Send Message'
        },
        (error) => {
          console.error('Form submission error:', error);
        }
      );
    } else {
      // Handle the case where the form is not valid
      console.log('Form is invalid.');
    }
  }
}

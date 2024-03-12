// dynamic-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  dynamicForm!: FormGroup; // Define the dynamicForm FormGroup
  submittedData: any = null; // To hold submitted data

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // Initialize the dynamicForm with an empty FormArray
    this.dynamicForm = this.formBuilder.group({
      dynamicFields: this.formBuilder.array([]),
    });
  }

  // Getter to access the dynamicFields FormArray
  get dynamicFields(): FormArray {
    return this.dynamicForm.get('dynamicFields') as FormArray;
  }

  // Method to add a new field to the dynamicFields FormArray
  addField() {
    this.dynamicFields.push(this.createField()); // Push a new FormControl to the FormArray
  }

  // Method to handle form submission
  onSubmit() {
    console.log(this.dynamicForm.value); // Log the submitted form data
    this.submittedData = this.dynamicForm.value; // Store the submitted form data

    // Reset the form to its initial state if needed
    this.dynamicForm.reset(); // Use reset() if you want to reset the form after submission
  }

  // Method to delete a field from the dynamicFields FormArray
  deleteField(index: number) {
    this.dynamicFields.removeAt(index); // Remove the field at the specified index
  }

  // Method to create a new FormControl representing a field
  createField(): FormGroup {
    return this.formBuilder.group({
      name: [''],   // Initialize with an empty string
      type: ['text'],
      value: ['']
    });
  }

  // Method to reset the form to its initial state
  resetForm() {
    this.dynamicFields.clear(); // Remove all dynamic fields from the FormArray
    this.dynamicForm.reset(); // Reset the form to its initial state
  }
}

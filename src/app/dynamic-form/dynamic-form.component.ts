// dynamic-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

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
  addField(type: string = 'text') {
    this.dynamicFields.push(this.createField(type)); // Push a new FormControl to the FormArray
  }

  // Method to handle form submission
  onSubmit() {
    // Log the submitted form data
    console.log(this.dynamicForm.value);

    // Store the submitted form data in the desired format
    const formattedData = {
      elements: this.dynamicForm.value.dynamicFields.map((field: any) => ({
        name: field.name,
        type: field.type,
        value: field.value,
      })),
    };

    // Log the formatted data
    console.log(formattedData);

    // Store the formatted data for further use
    this.submittedData = formattedData;

    // Reset the form to its initial state if needed
    this.dynamicForm.reset();
  }


  // Method to delete a field from the dynamicFields FormArray
  deleteField(index: number) {
    this.dynamicFields.removeAt(index); // Remove the field at the specified index
  }

  createField(type: string): FormGroup {
    let defaultValue: any;
    // Set default value based on field type
    switch (type) {
      case 'boolean':
        defaultValue = false; // or true, depending on your requirement
        break;
      default:
        defaultValue = '';
        break;
    }

    // Return a FormGroup with default values
    return this.formBuilder.group({
      name: [''],
      type: [type],
      value: [defaultValue],
    });
  }

  // Method to reset the form to its initial state
  resetForm() {
    this.dynamicFields.clear(); // Remove all dynamic fields from the FormArray
    this.dynamicForm.reset(); // Reset the form to its initial state
  }

  // Method to handle change in field type
  onTypeChange(selectedType: string, index: number) {
    const fieldGroup = this.dynamicFields.at(index) as FormGroup;
    const valueControl = fieldGroup.get('value');
    if (valueControl) {
      // Perform null check
      if (selectedType === 'boolean') {
        valueControl.setValue(true); // Set default value to true when type is boolean
      } else {
        valueControl.setValue(''); // Clear the value when type is not boolean
      }
    }
  }
}

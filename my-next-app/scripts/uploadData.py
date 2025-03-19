from flask import Flask, request, jsonify
import json

app = Flask(__name__)

def create_json_file(healthcareProfessionalName, healthcareProviderId, profession, location, filename="formData.json"):
    data = {
        "healthcareProfessionalName": healthcareProfessionalName,
        "healthcareProviderId": healthcareProviderId,
        "profession": profession,
        "location": location
    }
    
    with open(filename, 'w') as json_file:
        json.dump(data, json_file, indent=2)
    return f"File '{filename}' created successfully."

@app.route('/create-json', methods=['POST'])
def create_json():
    data = request.json
    result = create_json_file(
        data['healthcareProfessionalName'],
        data['healthcareProviderId'],
        data['profession'],
        data['location']
    )
    return jsonify({'message': result})

if __name__ == '__main__':
    app.run(debug=True)
from flask import Flask, render_template, request

app = Flask(__name__)

# Sample recipes stored in a dictionary
recipes = {
    "pasta": ["Boil pasta", "Add sauce", "Mix well"],
    "fried rice": ["Cook rice", "Add veggies", "Fry together"],
    "omelette": ["Beat eggs", "Add salt", "Cook on pan"],
    "maggi": ["Boil water", "Add noodles", "Add masala"],
    "sandwich": ["Add veggies", "Apply butter", "Toast it"],
    "chicken curry": ["Cook chicken", "Add curry", "Serve with rice"],
    "fruit salad": ["Cut fruits", "Add sugar", "Mix well"]
    
}

@app.route("/", methods=["GET", "POST"])
def home():
    result = None
    query = ""

    if request.method == "POST":
        query = request.form.get("recipe").lower()
        result = recipes.get(query, None)

    return render_template("index.html", result=result, query=query)


if __name__ == "__main__":
    app.run(debug=True)

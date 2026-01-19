languages = ["Python", "Java", "JavaScript", "C", "C++", "PHP", "Go", "Rust", "Ruby", "Kotlin"]

result = list(filter(lambda language: len(language) > 5, languages))

print(result)
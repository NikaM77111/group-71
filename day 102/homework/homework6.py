languages = [
    'Python', 'Java', 'C++', 'Go',
    'Rust', 'Swift', 'PHP', 'Ruby'
]

filtered_languages = [lang for lang in languages if 'a' not in lang]

print(filtered_languages)

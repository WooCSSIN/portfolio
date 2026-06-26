import os

def extract():
    try:
        with open('i.txt', 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print("Error reading i.txt:", e)
        return

    def save_file(path, start, end):
        try:
            os.makedirs(os.path.dirname(path), exist_ok=True)
        except:
            pass
        with open(path, 'w', encoding='utf-8') as f:
            f.writelines(lines[start:end])
        print(f"Saved {path} (lines {start+1} to {end})")

    # The lines are 0-indexed in Python list.
    save_file('src/App.tsx', 0, 968)
    save_file('src/index.css', 989, 1111)
    save_file('src/main.tsx', 1126, 1136)
    save_file('src/vite-env.d.ts', 1148, 1153)
    save_file('index.html', 1158, 1171)
    save_file('package.json', 1182, 1224)
    save_file('tailwind.config.js', 1234, 1245)
    save_file('YOUWARE.md', 1262, 1437)
    save_file('yw_manifest.json', 1449, 1453)

if __name__ == '__main__':
    extract()

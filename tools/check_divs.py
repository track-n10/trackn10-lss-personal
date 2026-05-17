from pathlib import Path

def main():
    p = Path(r'c:\Users\leosa\Documents\GitHub\trackn10-lss-personal\music.html')
    s = p.read_text(encoding='utf-8')
    lines = s.splitlines()
    open_count = 0
    problems = []
    for i, line in enumerate(lines, start=1):
        opens = line.count('<div')
        closes = line.count('</div>')
        open_count += opens - closes
        if open_count < 0:
            problems.append((i, open_count, line.strip()))

    print('Total <div> opens minus closes:', open_count)
    if problems:
        print('Problems detected at lines where closings exceeded opens:')
        for p in problems:
            print(p)
    else:
        print('No early-closing issues detected (divs appear balanced so far).')

    print('Total opens:', s.count('<div'))
    print('Total closes:', s.count('</div>'))

if __name__ == "__main__":
    main()

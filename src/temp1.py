import os

def list_files(directory):
  for filename in os.listdir(directory):
    filepath = os.path.join(directory, filename)
    if os.path.isfile(filepath) and ".webm" in filepath:
      print(filepath)

# Example usage:
directory_path = "C:/Users/nalam/Downloads"
list_files(directory_path)
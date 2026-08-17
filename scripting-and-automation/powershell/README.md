<<<<<<< HEAD
# PowerShell
=======
# PowerShell

extension `.ps1`

check-version `$PSVersionTable`

## Shell

### Basics

```ps1
# Where am I? 
Get-Location or pwd

# List files & directory 
Get-ChildItem or ls or dir

# Create file
New-Item test.txt

# Read file
Get-Content test.txt

# Delete file
Remove-Item test.txt

# Create directory
New-Item -ItemType Directory test

# Change directory
Set-Location C:\Users\Rahul or cd C:\Users\Rahul

# Delete directory
Remove-Item test - Recursive
```

## Scripting

Variables

```ps1
$name = "Hello"
```
>>>>>>> 92e9031e6e82e6f1207c43104f06be0c093a1d37

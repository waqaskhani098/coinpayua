const A = "/static/img/share/twitter.svg",
    N = "/static/img/share/telegram.svg",
    I = "/static/img/share/facebook.svg",
    Z = "/static/img/share/youtube.svg",
    b = "data:image/png;base64,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",
    m = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAIAAAAqztkuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFwmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMS0xNVQwODo1MjowNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMS0xNVQwODo1MjowNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDEtMTVUMDg6NTI6MDUrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NGQ2NmNkZjYtOWUyYS1hNTQzLTk2ODItNzhmMDc5ZjhmZTJhIiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZjlhMTQ5NDMtNDg1YS0xMzQxLWI4MTgtM2E0ZGU3MTZlMGQ0IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6YjA3NWUxNmItNGQwMi1iZDRkLWJiODAtY2MyNWQwZDRlNmY5IiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6YjA3NWUxNmItNGQwMi1iZDRkLWJiODAtY2MyNWQwZDRlNmY5IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTE1VDA4OjUyOjA1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo0ZDY2Y2RmNi05ZTJhLWE1NDMtOTY4Mi03OGYwNzlmOGZlMmEiIHN0RXZ0OndoZW49IjIwMTktMDEtMTVUMDg6NTI6MDUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+bzrD1AAAAERJREFUSIlj/P//PwPtARMd7Bi1ZtQaBgZGm7j9dLBmeAXaqDUj3hrGl1pKdKgJWD6x8NLDGkaG0WptkFrDwsTPTwdrAGq5CdwsONlkAAAAAElFTkSuQmCC",
    M = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAWCAIAAAAqztkuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGRmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wMS0xNVQwODo1NzozNSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wMS0xNVQwODo1NzozNSswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDEtMTVUMDg6NTc6MzUrMDg6MDAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6YmE1MDdhMWQtZDJhMC05NTRhLWEzMjktNTY3ZjE3YzJhNTc1IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6MDE2MzA5OWMtZTZmYS05YzQ0LWIzZTYtY2QxMDNiNGM4N2JiIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6OGRjOWFhZjUtNGUzMC1mZjRmLTlmYmUtNjQ4YjI1NDAyMDU1IiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6OGRjOWFhZjUtNGUzMC1mZjRmLTlmYmUtNjQ4YjI1NDAyMDU1IiBzdEV2dDp3aGVuPSIyMDE5LTAxLTE1VDA4OjU3OjM1KzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpiYTUwN2ExZC1kMmEwLTk1NGEtYTMyOS01NjdmMTdjMmE1NzUiIHN0RXZ0OndoZW49IjIwMTktMDEtMTVUMDg6NTc6MzUrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDxyZGY6QmFnPiA8cmRmOmxpPjU5MENGMEREQUQ2QkZERjQzODZFOTNBQjUyN0Y2MDc1PC9yZGY6bGk+IDwvcmRmOkJhZz4gPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+EG0FMQAAAuBJREFUSIm1Vb1vW1UcPb/75eevOE+2gyOaqB8uVCA6BFWCIQulS0FVpaoff0CnMjIwdmZmrLpVQqgDAgkhStWBoZAFEWWJmlChxiZJbcdJ/Pqe/d6798dC1KXOi1r5jFf3/s495x6dS/fPf3KJXCtNMRm8rdUvLFTYeY5SwU2MBlpFQSh0sTgpggOoYlHxiJEyO54YCbOAgiHnAQkd6QyDBABmRzjaCWcIjlT5VlFfENV+kjHfQRqYCsERABIcD5AOmUQGjfF1+Ten9JySDZlrZJgmAAuOXnCvS45Ftea8GRRBKTJUSWg9n6qgkwBk+27cPme5XJWS5J93g917EU9LkrTdSXIXcx99VWHYva4VcjyX74JOqg4XASBfMquPe1vPgub7x1pJ0nsylKNWSYiF5omH99uNhjl9rj6KMjzPshbQXrTzz1ut5bONqSTXfDE9R/mrX6S3vix8+uHW0snu+qz2oswh2WrscHducVG8e3bt69tc21xoHt+eufnzo37Nf3Dm0nv+XNcOvwfqb6SGCEJ6/aXNJ3dWGLGtzTxcyz9b/Wn+3Gy8W9j4bqX/R1uQlxnuLDWEhEhs2zPzVCvmC3fd0sxxM/r9erQand4I603d6SVEROBDo5pBwwyyCVUrpcVTehkAbqj1zW7cXm+/c8LsXLxs/14hFyOrQ7IiwFCSw6b+q83hro6eh34SzipO+/4grK/8mwQnpVYZUgCoghkBOVF+tbsEQE3vB2utp1vy82pt3yzThVh4Hyw80FfUxuNHlWIA5cspGs9EeTOiH+99/Nm1qcFOPEYM4CBzEIJhXOpVul0fDnV/T3HfDQUz2SEgxoag7Jtff9hX+98E8beuE4//bxhSMhGnqSQ18PQ6EXeTnEu0UpaZrD2sRo1Rg16ouOfEnmM3tmwAHFzBMhDCO1i2yf+CD3sZIR0nTlGBUCJKj1brrwFNFJCwkxr/EhZQRggGsur89cGAIfEfzQo+SZaNd9QAAAAASUVORK5CYII=",
    i = "/static/img/app/download/download.png";
export {
    A as _, N as a, I as b, Z as c, i as d, b as e, m as f, M as g
};
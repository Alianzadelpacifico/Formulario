import cgi
# import mysql.connector

# Conectar a la base de datos MySQL
# conn = mysql.connector.connect(
#     host="localhost",
#     user="tu_usuario",  # Reemplaza con tu usuario de MySQL
#     password="tu_contraseña",  # Reemplaza con tu contraseña de MySQL
#     database="mi_base_de_datos"  # Reemplaza con el nombre de tu base de datos
# )
# c = conn.cursor()

# Crear la tabla de usuarios si no existe
# c.execute('''
# CREATE TABLE IF NOT EXISTS usuarios (
#     id INT AUTO_INCREMENT PRIMARY KEY,
#     nombre VARCHAR(255) NOT NULL,
#     email VARCHAR(255) NOT NULL,
#     password VARCHAR(255) NOT NULL
# )
# ''')

# Procesar el formulario
form = cgi.FieldStorage()
action = form.getvalue('action')
if action == 'crear_cuenta':
    # Verificar el número de cuentas existentes
    # c.execute('SELECT COUNT(*) FROM usuarios')
    # cuenta_count = c.fetchone()[0]
    
    # if cuenta_count >= 2:
    print("Content-type: text/html\n")
    print('<html>')
    print('<head>')
    print('<meta charset="UTF-8">')
    print('<title>Error</title>')
    print('</head>')
    print('<body>')
    print('<h1>No tiene permiso para crear una cuenta</h1>')
    print('</body>')
    print('</html>')
    # else:
    #     nombre = form.getvalue('nombre')
    #     email = form.getvalue('email')
    #     password = form.getvalue('password')
    #     c.execute('INSERT INTO usuarios (nombre, email, password) VALUES (%s, %s, %s)', (nombre, email, password))
    #     conn.commit()
    #     print("Content-type: text/html\n")
    #     print('<html>')
    #     print('<head>')
    #     print('<meta http-equiv="refresh" content="0;url=Bienvenida.html" />')
    #     print('</head>')
    #     print('<body>')
    #     print('<h1>Cuenta creada exitosamente</h1>')
    #     print('</body>')
    #     print('</html>')
elif action == 'iniciar_sesion':
    # email = form.getvalue('email')
    # password = form.getvalue('password')
    # c.execute('SELECT * FROM usuarios WHERE email=%s AND password=%s', (email, password))
    # user = c.fetchone()
    # if user:
    print("Content-type: text/html\n")
    print('<html>')
    print('<head>')
    print('<meta http-equiv="refresh" content="0;url=user%20o%20admin.html" />')
    print('</head>')
    print('<body>')
    print('<h1>Inicio de sesión exitoso</h1>')
    print('</body>')
    print('</html>')
    # else:
    #     print("Content-type: text/html\n")
    #     print("<html><body><h1>Correo o contraseña incorrectos</h1></body></html>")

# Confirmar los cambios y cerrar la conexión
# conn.commit()
# conn.close()
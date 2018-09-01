<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
    <title>Login</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    {{--TODO Import bootsrap--}}
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <link href="{{ asset('css/app.css') }}" rel="stylesheet">


    {{--TODO FIX THIS--}}
    <style>
        body {
            background-image: url('/img/login//pic3.jpg');
            height: 100vh;
            background-size: cover;
            background-position: center;
        }

        .login-page {
            padding: 6.5% 0 0;
            margin: auto;
        }

        .register-page {
            width: 1200px;
            padding: 6.5% 0 0;
            margin: auto;
            height: 700px;
        }

        .form {
            position: relative;
            z-index: 1;
            background: #ffffff;
            width: 1000px;
            height: 600px;
            margin: auto;
            padding: 45px;
            text-align: left;
            border-radius: 26px;
            opacity: 1;
        }

        .register {
            text-align: left;
            margin-top: 30px;
        }

        .form input {
            border-radius: 26px;
        }

        .form button {
            font-family: "Roboto", "sans-serif";
            text-transform: uppercase;
            color: black;
            outline: 0;
            background-color: white;
            border: 2px solid #234f67;
            width: 100%;
            padding: 15px;
            font-size: 14px;
            cursor: pointer;
            border-radius: 26px;
        }

        .form button:hover {
            background-color: #234f67;
            color: white;
        }

        .login {
            width: 370px;
            position: absolute;
        }

        .register {
            width: 370px;
            position: absolute;
        }
    </style>
</head>
<body>

<div class="login-page">
    <div class="form">
        <div class="row">
            <div class="col-lg-6" style="text-align: center; margin-top: 60px">
                <img src="img/login/huiskluislogo.png" alt="IMG">
            </div>
            <div class="col-lg-6" style="margin-top: 82px">
                <form class="login-form" method="POST" action="{{ route('login') }}">
                    {{ csrf_field() }}
                    <div class="form-group{{ $errors->has('email') ? ' has-error' : '' }}">
                        <label for="email" class="control-label">E-Mail Address</label>
                        <div>
                            <input id="email" type="email" class="form-control" name="email" value="{{ old('email') }}"
                                   required autofocus>

                            @if ($errors->has('email'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('email') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>

                    <div class="form-group{{ $errors->has('password') ? ' has-error' : '' }}">
                        <label for="password" class="control-label">Password</label>
                        <div>
                            <input id="password" type="password" class="form-control" name="password" required>

                            @if ($errors->has('password'))
                                <span class="help-block">
                                    <strong>{{ $errors->first('password') }}</strong>
                                </span>
                            @endif
                        </div>
                    </div>
                    <div class="register">
                        <button type="submit" name="register-button">Login</button>
                        <p class="message"> Not a member yet? <a href="/register"> Register </a></p>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</body>
</html>

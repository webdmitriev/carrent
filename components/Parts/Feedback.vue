<template>
  <section class="feedback">
    <div class="container">
      <div class="feedback-wrapper">
        <h2 class="title">Мы рады обратной связи</h2>
        <p class="subTitle">
          Наша компания всегда выслушает предложения и замечания по работе. Мы настолько зациклены на сервисе,
          что каждое письмо с этой формы лично читает директор.
        </p>
        <form action="#" method="POST" class="feedback-form">
          <h3 class="title">Есть вопрос или предложение?</h3>
          <div class="form-group form-group-descr">
            <label for="feedbackDescr">Задайте ваш вопрос</label>
            <textarea
              name="user_descr"
              id="feedbackDescr"
              placeholder="У меня есть вопрос"
              required
            ></textarea>
          </div>
          <div class="form-group">
            <label for="feedbackName">Представьтесь, пожалуйста</label>
            <input type="text" id="feedbackName" name="user_name" placeholder="Ваше имя" required />
          </div>
          <div class="form-group">
            <label for="feedbackPhone">Телефон</label>
            <input
              type="text"
              id="feedbackPhone"
              name="user_phone"
              placeholder="+7 (XXX) XXX-XX-XX"
              required
            />
          </div>
          <div class="form-group">
            <label for="feedbackEmail">Электронная почта</label>
            <input
              type="text"
              id="feedbackEmail"
              name="user_email"
              placeholder="vasha@pochta.ru"
              required
            />
          </div>
          <div class="form-group form-group-btn">
            <button>Отправить</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss">
$white: #fff;
$black: #333;

.feedback {
  padding-top: 40px;
  padding-bottom: 40px;
  background: #fff;
  &-wrapper {
    h2.title {
      margin-bottom: 70px;
      font-size: 32px;
      line-height: 48px;
      text-align: center;
      color: #33325e;
    }
    p.subTitle {
      margin-bottom: 55px;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: #525f82;
    }
    form.feedback-form {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;
      padding: 27px 70px 34px 70px;
      background: #ffffff;
      box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.15);
      h3.title {
        width: 100%;
        margin-bottom: 26px;
        font-size: 24px;
        line-height: 26px;
        text-align: center;
        color: #562e46;
      }
      .form-group {
        width: 30%;
        &.form-group-descr,
        &.form-group-btn {
          width: 100%;
        }
        label {
          display: block;
          width: 100%;
          margin-bottom: 10px;
          padding-left: 17px;
          font-size: 18px;
          line-height: 1.4;
          color: #615457;
          box-sizing: border-box;
        }
        textarea {
          width: 100%;
          height: 172px;
          margin-bottom: 39px;
          padding: 15px 17px;
          font-size: 20px;
          line-height: 26px;
          color: #495057;
          background: #f5f5f5;
          background-clip: padding-box;
          border: none;
          border-radius: 5px;
          resize: none;
        }
        input {
          width: 100%;
          height: 56px;
          padding: 15px 17px;
          font-size: 20px;
          line-height: 26px;
          background: #f5f5f5;
          border: none;
          border-radius: 7px;
        }
        button {
          display: block;
          background: #ffffff;
          border: 2px solid #9b3c51;
          font-size: 20px;
          color: #9b3c51;
          text-align: center;
          line-height: 24px;
          padding: 13px 30px 15px 30px;
          margin: 55px auto 0 auto;
          border-radius: 10px;
        }
      }
    }
  }
}

@media (max-width: 1366px) {
}

@media (max-width: 1199px) {
  .feedback {
    padding-top: 40px;
    padding-bottom: 40px;
    &-wrapper {
      h2.title {
        margin-bottom: 70px;
        font-size: 32px;
        line-height: 48px;
      }
      p.subTitle {
        margin-bottom: 55px;
        font-size: 20px;
        line-height: 28px;
      }
      form.feedback-form {
        padding: 27px 70px 34px 70px;
        h3.title {
          width: 100%;
          margin-bottom: 26px;
          font-size: 24px;
          line-height: 26px;
        }
        .form-group {
          width: 30%;
          label {
            margin-bottom: 10px;
            padding-left: 17px;
            font-size: 16px;
            line-height: 1.4;
          }
          textarea {
            height: 172px;
            margin-bottom: 39px;
            padding: 8px 17px;
            font-size: 16px;
            line-height: 26px;
          }
          input {
            height: 56px;
            padding: 15px 17px;
            font-size: 16px;
            line-height: 26px;
          }
          button {
            margin: 55px auto 0 auto;
            padding: 13px 30px 15px 30px;
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

@media (max-width: 991px) {
  .feedback {
    padding-top: 30px;
    padding-bottom: 30px;
    &-wrapper {
      h2.title {
        margin-bottom: 20px;
        font-size: 26px;
        line-height: 38px;
      }
      p.subTitle {
        margin-bottom: 35px;
        font-size: 16px;
        line-height: 20px;
      }
      form.feedback-form {
        padding: 20px 30px 20px 30px;
        h3.title {
          margin-bottom: 20px;
          font-size: 20px;
          line-height: 26px;
        }
        .form-group {
          width: 32%;
          label {
            margin-bottom: 6px;
            padding-left: 10px;
            font-size: 14px;
            line-height: 1.4;
          }
          textarea {
            height: 172px;
            margin-bottom: 20px;
            padding: 8px 17px;
            font-size: 16px;
            line-height: 26px;
          }
          input {
            height: 56px;
            padding: 15px 10px;
            font-size: 14px;
            line-height: 20px;
          }
          button {
            margin: 40px auto 0 auto;
            padding: 13px 30px 15px 30px;
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .feedback {
    padding-top: 30px;
    padding-bottom: 30px;
    &-wrapper {
      h2.title {
        margin-bottom: 20px;
        font-size: 24px;
        line-height: 30px;
      }
      p.subTitle {
        margin-bottom: 30px;
        font-size: 14px;
        line-height: 20px;
      }
      form.feedback-form {
        padding: 20px 16px 12px 16px;
        h3.title {
          margin-bottom: 20px;
          font-size: 20px;
          line-height: 20px;
        }
        .form-group {
          width: 100%;
          margin-bottom: 14px;
          label {
            margin-bottom: 6px;
            padding-left: 10px;
            font-size: 14px;
            line-height: 1.4;
          }
          textarea {
            height: 120px;
            margin-bottom: 0px;
            padding: 8px 17px;
            font-size: 16px;
            line-height: 26px;
          }
          input {
            height: 56px;
            padding: 15px 10px;
            font-size: 14px;
            line-height: 20px;
          }
          button {
            margin: 5px auto 0 auto;
            padding: 13px 30px 15px 30px;
            font-size: 20px;
            line-height: 24px;
          }
        }
      }
    }
  }
}

@media (max-width: 576px) {
}

@media (max-width: 400px) {
}
</style>

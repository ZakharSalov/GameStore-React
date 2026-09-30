import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import styles from "./index.module.scss";

const registerSchema = z.object({
  username: z.string().min(2, 'Имя должно содержать минимум 2 символа'),
  email: z.string().email('Некорректный формат email')
});

type RegisterFormData = z.infer<typeof registerSchema>;

function Subscribe() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: 'onTouched',
  });

  const onSubmit = async (data: RegisterFormData) => {
    // Имитация запроса к API
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log('Успешная отправка данных:', data);
  };

  return (
    <section className={styles.subscribe}>
      <div className="container">
        <div className={styles.subscribeInner}>
          <h1 className={styles.subscribeTitle}>
            <span>Subscribe</span> to the Games Store Email List
          </h1>
          <p className={styles.subscribeText}>
            Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Games Store and our affiliates.
          </p>
        </div>
        <form className={styles.subscribeForm} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input className={styles.subscribeInput} type="name" placeholder="Your Name" required {...register('username')} />
            {errors.username && <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.username.message}</p>}
          </div>
          <div>
            <input className={styles.subscribeInput} type="email" placeholder="Your Email" required {...register('email')} />
            {errors.email && <p style={{ color: 'red', margin: '4px 0 0' }}>{errors.email.message}</p>}
          </div>
          <button className={`btn ${styles.subscribeBtn}`} type="submit" disabled={isSubmitting}>Subscribe</button>
        </form>
      </div>
    </section>
  )
}

export default Subscribe;
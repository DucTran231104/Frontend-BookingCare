# Hướng dẫn Deploy Frontend lên Vercel

## Yêu cầu
- Tài khoản Vercel (đăng ký tại https://vercel.com)
- Backend đã được deploy và có URL public
- Git repository (GitHub, GitLab, hoặc Bitbucket)

## Bước 1: Chuẩn bị code

### 1.1. Cập nhật cấu hình
File `src/config.js` đã được cập nhật để sử dụng environment variables:
- `REACT_APP_BACKEND_URL`: URL của backend API
- `REACT_APP_ROUTER_BASE_NAME`: Base path nếu deploy ở subdirectory

### 1.2. Kiểm tra file vercel.json
File `vercel.json` đã được tạo với cấu hình:
- Build command: `npm run build`
- Output directory: `build`
- Rewrites cho React Router

## Bước 2: Deploy qua Vercel Dashboard

### 2.1. Import Project
1. Đăng nhập vào https://vercel.com
2. Click **"Add New..."** → **"Project"**
3. Import repository từ GitHub/GitLab/Bitbucket
4. Chọn repository chứa Frontend-BookingCare

### 2.2. Cấu hình Project
- **Framework Preset**: Create React App (tự động detect)
- **Root Directory**: `Frontend-BookingCare` (nếu repo có nhiều folder)
- **Build Command**: `npm run build` (mặc định)
- **Output Directory**: `build` (mặc định)

### 2.3. Environment Variables
Thêm các biến môi trường trong **Environment Variables**:

```
REACT_APP_BACKEND_URL=https://your-backend-domain.com/
```

**Lưu ý**: 
- Thay `https://your-backend-domain.com/` bằng URL backend thực tế
- URL phải có dấu `/` ở cuối
- Nếu backend chưa có HTTPS, có thể dùng HTTP nhưng không khuyến nghị

### 2.4. Deploy
Click **"Deploy"** và đợi quá trình build hoàn tất.

## Bước 3: Deploy qua Vercel CLI (Tùy chọn)

### 3.1. Cài đặt Vercel CLI
```bash
npm install -g vercel
```

### 3.2. Login
```bash
vercel login
```

### 3.3. Deploy
```bash
cd Frontend-BookingCare

# Deploy lần đầu (sẽ hỏi cấu hình)
vercel

# Deploy production
vercel --prod
```

### 3.4. Set Environment Variables
```bash
# Set cho production
vercel env add REACT_APP_BACKEND_URL production

# Set cho preview
vercel env add REACT_APP_BACKEND_URL preview

# Set cho development
vercel env add REACT_APP_BACKEND_URL development
```

## Bước 4: Cấu hình Backend CORS

Đảm bảo backend cho phép CORS từ domain Vercel:

```javascript
// Backend server.js
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://your-vercel-app.vercel.app',  // Thêm domain Vercel
        'https://your-custom-domain.com'        // Nếu có custom domain
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true
}));
```

## Bước 5: Kiểm tra sau khi deploy

1. **Truy cập URL**: Vercel sẽ cung cấp URL dạng `https://your-app.vercel.app`
2. **Kiểm tra Console**: Mở DevTools → Console để xem lỗi
3. **Kiểm tra Network**: Xem requests API có thành công không
4. **Test các chức năng**: Login, đăng ký, xem danh sách...

## Troubleshooting

### Lỗi: API calls fail
- **Nguyên nhân**: Backend URL sai hoặc CORS chưa cấu hình
- **Giải pháp**: 
  - Kiểm tra `REACT_APP_BACKEND_URL` trong Vercel dashboard
  - Kiểm tra CORS trên backend
  - Kiểm tra backend có đang chạy không

### Lỗi: 404 khi refresh page
- **Nguyên nhân**: React Router không được cấu hình đúng
- **Giải pháp**: File `vercel.json` đã có rewrites, đảm bảo đã deploy đúng

### Lỗi: Build failed
- **Nguyên nhân**: Lỗi trong code hoặc dependencies
- **Giải pháp**: 
  - Xem logs build trong Vercel dashboard
  - Test build local: `npm run build`
  - Kiểm tra Node version (Vercel tự động detect)

### Environment variables không hoạt động
- **Nguyên nhân**: Biến môi trường chưa được set hoặc format sai
- **Giải pháp**:
  - Đảm bảo tên biến bắt đầu bằng `REACT_APP_`
  - Redeploy sau khi thêm/sửa environment variables
  - Kiểm tra trong Vercel dashboard → Settings → Environment Variables

## Custom Domain (Tùy chọn)

1. Vào Vercel Dashboard → Project → Settings → Domains
2. Thêm domain của bạn
3. Cấu hình DNS theo hướng dẫn của Vercel
4. Đợi DNS propagate (có thể mất vài phút đến vài giờ)

## Continuous Deployment

Vercel tự động deploy khi:
- Push code lên branch `main`/`master` → Production
- Push code lên branch khác → Preview deployment
- Tạo Pull Request → Preview deployment

## Lưu ý quan trọng

1. **Backend URL**: Phải là URL public, không thể dùng `localhost`
2. **HTTPS**: Vercel tự động cung cấp HTTPS
3. **Build time**: Environment variables được inject vào build time
4. **Redeploy**: Cần redeploy sau khi thay đổi environment variables

## Checklist trước khi deploy

- [ ] Backend đã được deploy và có URL public
- [ ] Backend đã cấu hình CORS cho domain Vercel
- [ ] Environment variable `REACT_APP_BACKEND_URL` đã được set
- [ ] Test build local thành công: `npm run build`
- [ ] Code đã được push lên Git repository
- [ ] Đã kiểm tra các chức năng chính hoạt động


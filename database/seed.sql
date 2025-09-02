
TRUNCATE TABLE "song", "artist", "genre"
RESTART IDENTITY CASCADE;

-- ======================
-- Géneros musicales
-- ======================
INSERT INTO genre (id, name, description, "createdAt", "updatedAt") VALUES
  ('add3b119-b460-47d7-88c7-101182235da6', 'Rock', 'Rock clásico y alternativo', NOW(), NOW()),
  ('07ddf16b-0352-420a-8d40-3bf16e68cb1c', 'Pop', 'Pop internacional', NOW(), NOW()),
  ('6e68c86a-605a-40e7-b75b-2f79d6551eb0', 'Jazz', 'Jazz contemporáneo y clásico', NOW(), NOW()),
  ('8b1f8e94-919b-4c73-8941-4a34603aa1f2', 'Reggaeton', 'Música urbana y reggaeton', NOW(), NOW());

-- ======================
-- Artistas
-- ======================
INSERT INTO artist (id, name, bio, image_url, "createdAt", "updatedAt") VALUES
  ('aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'The Beatles', 'Banda de rock inglesa formada en Liverpool', 'https://cdn.example.com/artists/beatles.jpg', NOW(), NOW()),
  ('dce80ec4-bc70-453a-8ca5-2b444ed36406', 'Taylor Swift', 'Cantautora estadounidense de pop y country', 'https://cdn.example.com/artists/taylor.jpg', NOW(), NOW()),
  ('056daa51-c6f6-4f3a-89c9-1c1c4b250c5b', 'Miles Davis', 'Trompetista y compositor estadounidense de jazz', 'https://cdn.example.com/artists/miles.jpg', NOW(), NOW()),
  ('f4061a92-3635-4db7-8c55-6f92f9903cf0', 'Bad Bunny', 'Cantante y rapero puertorriqueño de reggaeton y trap latino', 'https://cdn.example.com/artists/badbunny.jpg', NOW(), NOW());

-- ======================
-- Canciones
-- ======================

-- Beatles (Rock)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Hey Jude', 'Hey Jude', 'https://cdn.example.com/audio/heyjude.mp3', 'https://cdn.example.com/covers/heyjude.jpg', '07:11', 'AVAILABLE', '1968-08-26', 'aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'add3b119-b460-47d7-88c7-101182235da6', NOW(), NOW()),
  (gen_random_uuid(), 'Come Together', 'Abbey Road', 'https://cdn.example.com/audio/cometogether.mp3', 'https://cdn.example.com/covers/cometogether.jpg', '04:20', 'AVAILABLE', '1969-09-26', 'aeea088b-c9fc-47d1-ac25-52681d4ebb2f', 'add3b119-b460-47d7-88c7-101182235da6', NOW(), NOW());

-- Taylor Swift (Pop)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Love Story', 'Fearless', 'https://cdn.example.com/audio/lovestory.mp3', 'https://cdn.example.com/covers/lovestory.jpg', '03:55', 'AVAILABLE', '2008-09-15', 'dce80ec4-bc70-453a-8ca5-2b444ed36406', '07ddf16b-0352-420a-8d40-3bf16e68cb1c', NOW(), NOW()),
  (gen_random_uuid(), 'Shake It Off', '1989', 'https://cdn.example.com/audio/shakeitoff.mp3', 'https://cdn.example.com/covers/shakeitoff.jpg', '03:39', 'AVAILABLE', '2014-08-18', 'dce80ec4-bc70-453a-8ca5-2b444ed36406', '07ddf16b-0352-420a-8d40-3bf16e68cb1c', NOW(), NOW());

-- Miles Davis (Jazz)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'So What', 'Kind of Blue', 'https://cdn.example.com/audio/sowhat.mp3', 'https://cdn.example.com/covers/sowhat.jpg', '09:22', 'AVAILABLE', '1959-08-17', '056daa51-c6f6-4f3a-89c9-1c1c4b250c5b', '6e68c86a-605a-40e7-b75b-2f79d6551eb0', NOW(), NOW());

-- Bad Bunny (Reggaeton)
INSERT INTO song (id, title, album, audio_url, cover_url, duration, status, release_date, artist_id, genre_id, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Tití Me Preguntó', 'Un Verano Sin Ti', 'https://cdn.example.com/audio/titi.mp3', 'https://cdn.example.com/covers/titi.jpg', '04:03', 'AVAILABLE', '2022-05-06', 'f4061a92-3635-4db7-8c55-6f92f9903cf0', '8b1f8e94-919b-4c73-8941-4a34603aa1f2', NOW(), NOW());

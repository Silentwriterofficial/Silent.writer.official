const menuToggle = document.getElementById("menuToggle");
const sidebar = document.querySelector(".sidebar");

menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});
create or replace function public.increment_likes(poem_id text)
returns bigint
language plpgsql
security definer
as $$
declare
  new_likes bigint;
begin
  update public.poems
  set likes = coalesce(likes, 0) + 1
  where id = poem_id
  returning likes into new_likes;

  return new_likes;
end;
$$;

grant execute on function public.increment_likes(text) to anon;

document.addEventListener("click", function(e) {
  if (e.target.classList.contains("like-btn")) {
    alert("Кнопка работает");
  }
});

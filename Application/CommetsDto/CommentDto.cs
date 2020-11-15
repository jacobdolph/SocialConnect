namespace Application.CommetsDto
{
    public class CommentDto
    {
          public Guid Id { get; set; }
        public string Body { get; set; }
        public virtual AppUser Author { get; set; }
        public virtual Activity Activity { get; set; }
        public DateTime CreatedAt { get; set; }

    }
}
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PortfolioWebsiteKgoDev.Migrations
{
    /// <inheritdoc />
    public partial class AddedLinkToProject : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Link",
                table: "Projects",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Photo",
                table: "Projects",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Link",
                table: "Projects");

            migrationBuilder.DropColumn(
                name: "Photo",
                table: "Projects");
        }
    }
}
